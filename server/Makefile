build:
	docker build -t chat-app-server .
run:
	docker run -p 4000:4000 --env-file .env -d --rm --name chat-app-server chat-app-server
stop:
	docker stop chat-app-server