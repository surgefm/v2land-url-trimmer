EXE_PATH=./node_modules/.bin/eslint
APP_PATH=trimmers/**/*.js
TEST_PATH=tests/**/*.js

test:
	node ./node_modules/mocha/bin/mocha tests/trim.test.js --exit;

eslint:
	$(EXE_PATH) $(APP_PATH)
	$(EXE_PATH) $(TEST_PATH)

eslint-fix:
	$(EXE_PATH) $(APP_PATH) --fix
	$(EXE_PATH) $(TEST_PATH) --fix