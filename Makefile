
SRC := $(wildcard src/*.js)
TESTS := $(wildcard test/*.js)

.DEFAULT_GOAL := lib

lib: $(SRC)
	./node_modules/.bin/babel --out-dir $@ src --source-maps inline
	touch $@

test: node_modules
	./node_modules/.bin/ava

coverage: $(SRC) $(TESTS) node_modules
	./node_modules/.bin/nyc --reporter=lcov --reporter=html ./node_modules/.bin/ava

node_modules: package.json
	npm install
	touch $@

clean:
	rm -rf coverage .nyc_output lib

.PHONY: clean
