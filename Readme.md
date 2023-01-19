Reproduction for [styled-components#3924](https://github.com/styled-components/styled-components/issues/3924).

1. Check out `git clone git@github.com:Xiphe/styled-components-full-document-hydration-problem.git`
2. `cd styled-components-full-document-hydration-problem`
3. run `npm install`
4. run `npm start`
5. open http://localhost:1234/
6. See Pink headline and no errors in the console
7. Comment in [line 7 of `index.jsx`](https://github.com/Xiphe/styled-components-full-document-hydration-problem/blob/main/index.jsx#L7)
8. reload page and see unstyled headline along with hydration errors in the console
