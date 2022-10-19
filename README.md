# MERMAID Landing Site
MERMAID (Marine Ecological Research Management Aid) Landing Site. Transform underwater insights into data-driven actions that save coral reefs.


## Development Environment
---
### Prequisite
- Docker Installed
- Have Access to some ENV value

### How To
Step by step to provision local environment
1. Create an .env files by copying from .env.example and fill the required environment variable.
2. Run this command ``` docker compose -f docker-compose.local.yml up ```
2. To install the php dependencies, open other terminal and run ``` docker exec -it app composer install```
3. To install nodejs dependencies for frontend, run ```docker exec -it app npm install```
4. To build / mix the assets, run ```docker exec -it app npm development```
5. Link the storage by runing this commnad ```docker exec -it app php artisan storage:link```
6. Then mount the content by runing this command ```docker exec -it app php artisan mount:content```
7. Any other command that you wanna run, just add prefix ```docker exec -it``` then follow with your command such as ```npm, composer, php artisan,  etc```
7. Open http://localhost:8081 to access the website.



## Deployment
---
The deployment for this app is utilizing the CircleCI. For branching strategy, we use :
- development : for development purpose ( branch for dev to collaborate )
- staging : branch for staging environment, any push/accepted PR towards this branch will be deployed outomatically into staging env.
- main : production branch, after staging is well tested, you could promote the deployment into production by merge the staging branch to main branch. This will be automatically deploy to production.

## Note
Staging & Production env are stored in ElasticBeanstalk in AWS, any changes of the env variable should be made in AWS Console
