fetch("http://13.233.95.158:5000/api_get_my_events/-1",{
    method:"GET",
    headers:{
        "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDg5NzM1NjQyYjQwZjcwYjU4YjQ0MWYiLCJpYXQiOjE2OTE3NDA1NzYsImV4cCI6MTY5MzkwMDU3Nn0._Rrl8lEJgaBE29qvOZubRRqu3_VY7tHnGQjFYqX2fJg",
        "content-tyhpe":"application/json"
    }
}).then(data=>data.json().then( data=>console.log(data)))