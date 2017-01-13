# Developer Portfolio

Developer portfolio is a one page developer portfolio based on [Freelancer](http://startbootstrap.com/template-overviews/freelancer/) using BootStrap & AngularJS.

The content of developer portfolio can be configured using a single JSON model file under [`app/js/model.json`](https://github.com/bertrandmartel/developer-portfolio/blob/master/app/js/model.json)

### [Live preview](http://bertrandmartel.github.io/developer-portfolio)

## Getting Started

To begin using this template, choose one of the following options to get started:
* Clone the repo: `git clone https://github.com/bertrandmartel/developer-portfolio.git`
* Fork the repo

## Run the template locally

Install dependencies and start a local http server to test your application :
```
npm start
```

Server runs by default on [localhost:8000](http://localhost:8000)

## Update content

You only need to modify `model.json` in [`app/js/model.json`](https://github.com/bertrandmartel/developer-portfolio/blob/master/app/js/model.json) to update porfolio content.

The model includes the following fields :

|    field name       |  type        | description                                                                                  |
|---------------------|--------------|----------------------------------------------------------------------------------------------|
| name                | String       | your name                                                                                    |
| services            | Array        | service object defined by a name, a link and a font                                          |
| title               | String       | your title                                                                                   | 
| copyright           | String       | the copyright string at the end of the page                                                  |
| email               | String       | your email                                                                                   | 
| location            | Object       | your location defined by `city` and `country`                                                |
| social              | Array        | list of social network at the end of the page defined by a link and a font                   |
| openSourceLimit     | Number       | number of open source projects you want to show at a time                                    |              
| openSourceShowMore  | Number       | number of open source projects to add when user clicks on "show more projects"               |
| appsLimit           | Number       | number of applications/software you want to show at a time                                   |               
| appsShowMore        | Number       | number of applications/software  to add when user clicks on "show more projects"             |
| sections            | Array        | list of sections identified by id used for the top menu                                      |             
| about               | Object       | the object description of "about" section                                                    |
| languages           | Array        | list of language to show in dropdown list when user clicks on language filters               |
| sort                | Array        | list of sort string used for the open source project language filter                         |
| technologies        | Array        | list of technologies you identify yourself with                                              |    
| experience          | Array        | list of "experience" objects including a description, an image link, a list of tags and date |
| education           | Array        | list of "education" objects including a description, an image link, a list of tags and date  |
| opensource          | Array        | list of "opensource" objects including a description, a link, a list of tags, stars field, a list of languages and date |
| software            | Array        | list of "software" objects including a description, a link, a list of tags, an image link, a link, a list of languages and date |
| stackoverflow       | Object       | stackoverflow flair object containing userlink, flairlink & title description

## Copyright and License

```
The MIT License (MIT)

Copyright for portions of project Developer Portfolio are held by Blackrock Digital LLC, 2013-2016 
as part of project Start Bootstrap - Freelancer. 
All other copyright for project Developer Portfolio are held by Bertrand Martel, 2017.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
