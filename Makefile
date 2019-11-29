build:
	npm run build
deploy: build
	aws --profile mt-net s3 cp --acl public-read --recursive docs/dist/ 's3://mt-net-cdn/libs/mt-block-editor/0.0.1/' && aws --profile mt-net s3 cp --acl public-read --recursive docs/locales/ 's3://mt-net-cdn/libs/mt-block-editor/0.0.1/locales/'
