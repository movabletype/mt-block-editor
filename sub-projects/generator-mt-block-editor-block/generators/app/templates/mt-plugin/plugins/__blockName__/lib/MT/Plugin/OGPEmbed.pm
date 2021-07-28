package MT::Plugin::OGPEmbed;

use strict;
use warnings;
use utf8;

use MT::Util;

our @EXPORT_OK = qw( plugin translate);
use base qw(Exporter);

sub component {
    __PACKAGE__ =~ m/::([^:]+)\z/;
}

sub translate {
    MT->component( component() )->translate(@_);
}

sub plugin {
    MT->component( component() );
}

sub response {
    my ( $app, $json, $status ) = @_;

    $app->response_code($status)
        if defined $status;
    $app->send_http_header("application/json; charset=utf-8");
    $app->print_encode($json);
    $app->{no_print_body} = 1;
}

sub error {
    my ( $app, $msg, $status ) = @_;
    response( $app, MT::Util::to_json( { error => { message => $msg, }, } ), $status );
}

sub resolve {
    my ($app) = @_;
    my $url = $app->param('url');

    eval { require MT::Plugin::OGPEmbed::HeadParser };
    return error( $app, $@, 500 ) if $@;

    return error( $app, 'Invalid request', 400 ) unless $url;

    my $ua  = MT->new_ua;
    my $res = $ua->get($url);

    return error( "Can not get site data from URL: ${url}", 500 ) unless $res->is_success;

    my $parser = MT::Plugin::OGPEmbed::HeadParser->new;
    eval { $parser->parse( $res->decoded_content ) };
    return error( "Failed to parse HTML: ${url}", 500 ) if $@;

    my $hash = $parser->hash;
    response(
        $app,
        MT::Util::to_json(
            {   icon          => $hash->{icon}             || '',
                ogType        => $hash->{"og:type"}        || '',
                ogLocale      => $hash->{"og:locale"}      || '',
                ogTitle       => $hash->{"og:title"}       || $hash->{"title"} || '',
                ogDescription => $hash->{"og:description"} || $hash->{"description"} || '',
                ogImage       => $hash->{"og:image"}       || '',
                ogImageWidth =>
                    ( $hash->{"og:image:width"} ? int( $hash->{"og:image:width"} ) : undef ),
                ogImageHeight =>
                    ( $hash->{"og:image:height"} ? int( $hash->{"og:image:height"} ) : undef ),
                ogUrl      => $hash->{"og:url"}       || $hash->{"canonical"} || '',
                ogSiteName => $hash->{"og:site_name"} || '',
            }
        )
    );
}

1;
