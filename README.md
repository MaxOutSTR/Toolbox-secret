# Secret
This app will be a submission for the Toolbox's Take home test.

The app shows a list of all files 

# Docker Compose
In order to run both projects as separate containers please run ```docker compose up --build``` in this repo's root directory (```./```)

# Backend
## Notes
This backend runs on ```port 8080```
<br>
Tests were implemented assuming all files match the pattern 'test```{number}```.csv'.
<br>
TDD was done for this backend project and a list of endpoints and their function are detailed below.
## Endpoints
- To retrieve the list of files: ```/files/list```
- To retrieve a single file: ```/files/data?fileName=test1```
- To retrieve all files: ```/files/data```