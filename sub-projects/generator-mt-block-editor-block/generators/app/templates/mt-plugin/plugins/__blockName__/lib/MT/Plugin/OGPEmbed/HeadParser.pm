package MT::Plugin::OGPEmbed::HeadParser;

use strict;
use warnings;
use utf8;

use base qw(HTML::Parser);

use HTTP::Headers;

sub new {
    my $class = shift;

    my $self = $class->SUPER::new(
        api_version     => 3,
        start_h         => [ "start", "self,tagname,attr" ],
        end_h           => [ "end", "self,tagname" ],
        text_h          => [ "text", "self,text" ],
        ignore_elements => [qw(script style)],
    );
    $self->{hash} = {};
    $self->{tag}  = '';
    $self->{text} = '';

    $self;
}

sub hash {
    $_[0]->{hash};
}

sub start {
    my ( $self, $tag, $attr ) = @_;    # $attr is reference to a HASH
    $self->{tag} = '';
    if ( $tag eq 'meta' ) {
        my $name
            = ( $attr->{property} || "" ) =~ m{^og:}i                    ? $attr->{property}
            : ( $attr->{name}     || "" ) =~ m{^description$|^twitter:}i ? $attr->{name}
            :                                                              undef;
        $self->{hash}{ lc $name } ||= $attr->{content} if $name;
    }
    elsif ( $tag eq 'link' ) {
        my $name
            = ( $attr->{rel} || "" ) =~ m{^canonical$}i         ? $attr->{rel}
            : ( $attr->{rel} || "" ) =~ m{\b(shortcut|icon)\b}i ? 'icon'
            :                                                     undef;
        $self->{hash}{ lc $name } ||= $attr->{href} if $name;
    }
    elsif ( $tag =~ /^(?:title)$/ ) {
        $self->{tag}  = lc $tag;
        $self->{text} = '';
    }
}

sub end {
    my ( $self, $tag ) = @_;
    $self->{hash}{ $self->{tag} } = $self->{'text'} if $self->{tag};
    $self->eof if $tag eq 'head';
}

sub text {
    my ( $self, $text ) = @_;
    $self->{'text'} .= $text;
}

1;
