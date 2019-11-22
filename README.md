# _TapRoom_

#### _Taproom management Software {11/6/2019}_

#### By _**Devin Cooley**_

## Description

_The purpose of this application is to allow a TapRoom employeed to manage sales and keg usage, while on the customer side allowing the user to browse and compare beers._  

## Specifications
![project map](./src/img/TapRoom-Application-Map.jpg "TapRoom Map")
* #### Authentication
| Spec                      |Input          | Output |
|:---------------------------|:-------------|:------|
|MORE TO COME HERE||

* #### Employees
| Spec                      |Input          | Output |
|:---------------------------|:-------------|:------|
|Allows the employee to view a list of all kegs|`Click ViewAllKegs button`|_List of all kegs is displayed_|
|Shows the employee the remaining contents of all kegs|`Click ViewAllKegs button`|_Keg contents displayed in list of kegs_|
|Allows the employee to add a keg to the inventory|`Click AddKeg button`|_Form is displayed to add keg details_|
|Allows the employee to edit the details of an existing keg|`Click the EditKeg button`|_Form is displayed to edit the keg details_|
|Allows the employee to view a ist of all kegs that are almost empty|`Click KegsToReplace button`|_List of all near-empty kegs is displayed_|
|Allows the employee to sell beers from all available kegs|`Click SellBeer button`|_Inventory for that keg is decremented by 1_|

* #### Customers
| Spec                      |Input          | Output |
|:---------------------------|:-------------|:------|
|Allows a user to view a list of available beers|`Click BeerList button`|_List of available beers is displayed_|
|Alerts the user to different beer prices with color coding|`Click BeerList button`|_Beer price is displayed with dif colors for dif prices_|
|Allows the user to sort the list of beers by alcohol content|`Click SortByAlcohol button`|_List of beers by alcohol content is displayed_|


## Setup/Installation Requirements
_Clone this repository from github at https://github.com/Dcooley1350/TapRoom. In your CLI, navigate to the root directory of the project and run `npm install`(this assumes Node Package Manager is installed and functional on your machine). After necessary packages install, enter `npm run start`. This will start the project on a local host. In your browser, navigate to the local host specified by your CLI.


## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_Send any questions or comments to Devin Cooley at dcooley1350@gmail.com._

## Technologies Used

_This application was written using JavaScript, HTML, and CSS. Packages manager with Node Package Manager. Webpack was used to bundle and deploy all necessary assets._

### License

*This software is licensed under the MIT license.*

Copyright (c) 2019 **_Devin Cooley**