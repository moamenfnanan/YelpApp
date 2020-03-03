import axios from 'axios'
export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization:
            'Bearer PkwR8kTHlEB0Stswk4SeTA0WAAoHcWKkjYPg-kIvm1ToFZ-83b0zd3DfXJ1Oz83BBz5Gwzx8_zbeWFFc6s-fFpOwx3e7b4zYrtTSvYdvirZrb11feND4ifEXlY01XnYx'
    }
})