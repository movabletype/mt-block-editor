build:
	npm run build
deploy: build
	aws --profile mt-net s3 cp --acl public-read --recursive docs/dist/ 's3://mt-net-cdn/libs/mt-block-editor-block-oembed/0.0.1/'
