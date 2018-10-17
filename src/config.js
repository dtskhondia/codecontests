const dev = {
  apiGateway: {
    URL: "http://localhost:8000/contests/?format=json"
  }
};
  
const prod = {
  apiGateway: {
    URL: "https://codecontests-api.herokuapp.com/contests/?format=json"
  }
};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default {
...config
};