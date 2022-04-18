build:
	npm run build
deploy: TAG:=$(shell git describe --tags --exact-match 2>/dev/null)
deploy: BRANCH:=$(shell git symbolic-ref -q --short HEAD 2>/dev/null)
deploy: build
	if [ "${TAG}" != "" ]; then \
		aws s3 cp --acl public-read --recursive docs/dist/ 's3://${CDN_S3_BUCKET}/libs/mt-block-editor/${TAG}/'; \
	elif [ "${BRANCH}" != "" ]; then \
		aws s3 cp --acl public-read --recursive docs/dist/ 's3://${CDN_S3_BUCKET}/libs/mt-block-editor/branch/${BRANCH}/'; \
	else \
		echo "Can not find tag or branch to deploy"; \
		exit 1; \
	fi

gh-pages: hash=$(shell git rev-parse HEAD)
gh-pages:
	(b=$$(git rev-parse HEAD); git checkout gh-pages; git reset --hard $$b)
	$(MAKE) build
	cp -R docs/* .
	mv demo/index.html .
	echo '<html><head><meta http-equiv="refresh" content="0;URL=https://movabletype.github.io/mt-block-editor/" /></head></html>' > demo/index.html
	perl -i -pe 's{"/(tinymce)}{"/mt-block-editor/$$1}g; s{"/demo/"}{"/mt-block-editor/"}g; s{(&quot;|")/demo}{$$1/mt-block-editor/demo}g;' index.html demo/*.html
	perl -i -pe 's/\$$\{ts\}/${hash}/;' demo/apply.js index.html demo/*.html
	git add .
	git commit -m 'Build gh-pages'
