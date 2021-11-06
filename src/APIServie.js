
export default class APIService{

    static GetStudents(token){
        return  fetch(`http://127.0.0.1:8000/detail/api/details`,{
            method:'GET',
            headers:{
                'Content-type':'application/json',
                'Authorization':`Token ${token}`
              },
            
        }).then(resp=>resp.json())
    }

     static InsertStudent(body,token){
        return  fetch(`http://127.0.0.1:8000/detail/api/details/`,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'Authorization':`Token ${token}`
              },
            body:JSON.stringify(body)
        }).then(resp=>resp.json())
    }

      static UpdateStudentDetail(id,body,token){
        return  fetch(`http://127.0.0.1:8000/detail/api/details/${id}/`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json',
                'Authorization':`Token ${token}`
              },
            body:JSON.stringify(body)
        }).then(resp=>resp.json())
    }

    static DeleteStudentDetail(id,token){
        return  fetch(`http://127.0.0.1:8000/detail/api/details/${id}/`,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json',
                'Authorization':`Token ${token}`
              },
           
        }).then(resp=>resp.json())
    }

    static DeleteStudentFeesDetail(id,token){
        return  fetch(`http://127.0.0.1:8000/fees/api/details/${id}/`,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json',
                'Authorization':`Token ${token}`
              },
           
        }).then(resp=>resp.json())
    }

    static GetStudentFeeDetail(token){
        return  fetch(`http://127.0.0.1:8000/fees/api/details`,{
            method:'GET',
            headers:{
                'Content-type':'application/json',
                'Authorization':`Token ${token}`
              },
            
        }).then(resp=>resp.json())
    }

    static InsertStudentFeeDetail(body,token){
        return  fetch(`http://127.0.0.1:8000/fees/api/details/`,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'Authorization':`Token ${token}`
              },
            body:JSON.stringify(body)
        }).then(resp=>resp.json())
    }
    // static UpdateArticle(article_id,body,token){
    //     return  fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`,{
    //         method:'PUT',
    //         headers:{
    //             'Content-type':'application/json',
    //             'Authorization':`Token ${token}`
    //           },
    //         body:JSON.stringify(body)
    //     }).then(resp=>resp.json())
    // }

    // static InsertArticle(body,token){
    //     return  fetch(`http://127.0.0.1:8000/api/articles/`,{
    //         method:'POST',
    //         headers:{
    //             'Content-type':'application/json',
    //             'Authorization':`Token ${token}`
    //           },
    //         body:JSON.stringify(body)
    //     }).then(resp=>resp.json())
    // }

    // static deletearticle(article_id,token){
    //     return  fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`,{
    //         method:'DELETE',
    //         headers:{
    //             'Content-type':'application/json',
    //             'Authorization':`Token ${token}`
    //           },
    //     })
    // }
    // static LoginUser(body){
    //     return  fetch(`http://127.0.0.1:8000/auth/`,{
    //         method:'POST',
    //         headers:{
    //             'Content-type':'application/json',
                
    //           },
    //         body:JSON.stringify(body)
    //     }).then(resp=>resp.json())
    // }

    // static RegisterUser(body){
    //     return  fetch(`http://127.0.0.1:8000/api/users/`,{
    //         method:'POST',
    //         headers:{
    //             'Content-type':'application/json',
                
    //           },
    //         body:JSON.stringify(body)
    //     }).then(resp=>resp.json())
    // }

}