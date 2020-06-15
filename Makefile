build:
	npm run build
deploy: build
	aws s3 cp --acl public-read --recursive docs/dist/ 's3://${CDN_S3_BUCKET}/libs/mt-block-editor/$(shell npx -c 'echo "$$npm_package_version"')/'

gh-pages: hash=$(shell git rev-parse HEAD)
gh-pages:
	(b=$$(git rev-parse HEAD); git checkout gh-pages; git reset --hard $$b)
	$(MAKE) build
	cp -R docs/* .
	mv demo/index.html .
	echo '<html><head><meta http-equiv="refresh" content="0;URL=https://movabletype.github.io/mt-block-editor/" /></head></html>' > demo/index.html
	perl -i -pe 's{"/(tinymce)}{"/mt-block-editor/$$1}g; s{"/demo/"}{"/mt-block-editor/"}g; s{(&quot;|")/demo}{$$1/mt-block-editor/demo}g;' index.html demo/*.html
	perl -i -pe 's/\$$\{ts\}/${hash}/;' demo/apply.js
	git add .
	git commit -m 'Build gh-pages'
