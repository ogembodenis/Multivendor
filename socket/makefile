SERVICE := bids

docker_login:
	sudo docker login registry.gitlab.com

docker_build:
	sudo docker build -t registry.gitlab.com/mariainviolater/tt_erp_socket:v3 .
docker_push:
	sudo docker push registry.gitlab.com/mariainviolater/tt_erp_socket:v3

build_service: docker_login docker_build docker_push