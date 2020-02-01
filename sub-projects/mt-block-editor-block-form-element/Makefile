build:
	npm run build
deploy: build
	aws s3 cp --acl public-read --recursive docs/dist/ 's3://${CDN_S3_BUCKET}/libs/mt-block-editor-block-form-element/$(shell npx -c 'echo "$$npm_package_version"')/'
