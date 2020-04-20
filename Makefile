help:
	@echo "usage: make COMMAND [c=[arguments]]"
	@echo ""
	@echo "Commands:"
	@echo "  up                     Up all docker services"
	@echo "  down                   Stop all docker services"
	@echo "  dps                    Show all running containers"
	@echo "  db-refresh             Refresh current DB"

# Show all running containers
dps:
	@docker ps --format "table {{.ID}}\t{{.Ports}}\t{{.Names}}"

# Up docker environment
up:
	docker-compose up -d
	make dps

# Down docker environment
down:
	docker stop $(shell docker ps -a -q)	

build-containers:
	docker-compose -f docker-compose-build.yml build

# Refresh current DB
db-reset:
	@yarn run db:reset
