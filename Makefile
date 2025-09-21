# Makefile
up:
	docker-compose -f docker-compose.dev.yml up -d
down:
	docker-compose -f docker-compose.dev.yml down
logs:
	docker-compose -f docker-compose.dev.yml logs -f
ps:
	docker-compose -f docker-compose.dev.yml ps
