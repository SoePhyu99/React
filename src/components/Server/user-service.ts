import ApiClient from "./Api-client";

export interface User{
    id: number;
    name: string;
}

class UserService{
    getAllUser(){
        let controller = new AbortController();
        let request = ApiClient.get<User[]>("/users", {
			signal: controller.signal,
		})
        return {request, cancel: ()=> controller.abort()}
    }
    postUser(user:User){
        return ApiClient.post("/users", user);
    }
    patchUser(user: User){
        return ApiClient.patch("/users/" + user.id, user)
    }
    deleteUser(id: number){
        return ApiClient.delete("/users/"+ id);
    }
}

export default new UserService();