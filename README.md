# MERMAID Landing Site

## Prerequisites
- AWS IAM user credentials with Elastic Beanstalk access
- Access to or fork of mermaid-landing git repository (this)
- CircleCI access in order to use CI/CD scripts
- RDS database 

## Create new Elastic Beanstalk environment
- Login with IAM user to AWS EB service page
- Create new EB Environment, select Web server environment
- Fill in the forms as below:
    - Application name eg: `mermaid-landing-test`
    - Environment name eg: `mermaid-landing-test-env`
    - Select platform for **PHP 8.0**
    - Select `Sample application` on **Application Code**
    - **Configure more options** edits 
        - **Software:**
            - Select Nginx for Proxy server and change Document root to `/public`
        - **Security:**
            - Select the appropriate EC2 key pair 
        - **Instance:**
            - Check the appropriate EC2 security groups

## Environment variables
- Full list of env variables

```
APP_NAME="WCS MERMAID"
APP_ENV=
APP_KEY=
APP_DEBUG=false
APP_URL=
TINYMCE_CLOUD_APIKEY=

STATAMIC_THEME=business
STATAMIC_CUSTOM_CMS_NAME="WCS MERMAID CMS"
STATAMIC_CUSTOM_LOGO_URL="/logo.png"
STATAMIC_CUSTOM_FAVICON_URL="/favicon.png"

STATAMIC_LICENSE_KEY=
STATAMIC_STACHE_WATCHER=true
STATAMIC_STATIC_CACHING_STRATEGY=null
STATAMIC_REVISIONS_ENABLED=false
STATAMIC_GRAPHQL_ENABLED=false
STATAMIC_API_ENABLED=false

STATAMIC_GIT_ENABLED=true
STATAMIC_GIT_AUTOMATIC=false

LOG_CHANNEL=stack
FILESYSTEM_DRIVER=s3
FILESYSTEM_CLOUD=s3

DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=

DB_CONNECTION_2=pgsql_2
DB_HOST_2=127.0.0.1
DB_PORT_2=5432
DB_DATABASE_2=
DB_USERNAME_2=
DB_PASSWORD_2=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

MAIL_MAILER=
MAIL_HOST=
MAIL_PORT=
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_ENCRYPTION=

MAIL_FROM_ADDRESS=
MAIL_FROM_NAME=

ENABLE_SYNC_CLOUD=true

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
AWS_BUCKET=

CHANGELOG_URL=
CHANGELOG_PATH=

STATAMIC_LINK_TO_DOCS=false
STATAMIC_SUPPORT_URL=false

CAPTCHA_SECRET=
CAPTCHA_SITEKEY=

EB_ENV_NAME=
EB_APP_NAME=
EB_KEY_NAME=
EB_REGION=
```
- Add the following environment variables on CircleCI project setting page:
    - `APP_URL` : your domain
    - `EB_ENV_NAME` : your elastic beanstalk env name
    - `EB_APP_NAME` : your elastic beanstalk app name
    - `EB_REGION` : your elastic beanstalk region
    - `EB_KEY_NAME` : your selected EC2 key pair
    
