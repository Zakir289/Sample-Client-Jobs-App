
## Steps to run the project
1. npm install 
2. npm run start (by default starts in 3000, if port is occuppied changed it accordingly in start.js)

#### Overview implementation of the project

1. **React.Memo** is used to stop unnecessary rendering of a component, It allow for the component renrender
only when specified props changed.
2. wrapper component is an **HOC** used to provide extra css for the component with a wrapper. 
3. **useEffect** hook is used to fetch the data from the backend. 
4. **Custom Hook**, use-client-data.jsx is an custom hook which can be reusable to fetch the data in the required 
component. 
5. **useCallback** is used, to avoid rerender of child compoenents as the function will be memoised unless it's
dependents are changed. 
6. For state management, **Redux** is used, To handle async Things Thunk is used. 
7. **Keys** helps to compare the old Virtual dom with newly created Virtual dom and renders only that of 
 the tree that is changed to improve the performance.
8. **moment** is used to calculate Date related data.
9.  eslint and prettier is used with standard mode Airbnb
 10. To Keep things simple, No third party library is used for Table.     


### Output screen shots 
1. CLients page ![ CLients page](https://github.com/Zakir289/Sample-Client-Jobs-App/blob/master/output/CLients.PNG)
2. Client page ![CLient Page](https://github.com/Zakir289/Sample-Client-Jobs-App/blob/master/output/Client.PNG)
3. Job Page ![Job page](https://github.com/Zakir289/Sample-Client-Jobs-App/blob/master/output/Job.PNG)
