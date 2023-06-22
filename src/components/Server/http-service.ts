import ApiClient from "./api-client";

interface Entity{
    id: number;
}

class HttpService{
    endpoint: string;
    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll<T>(){
        let controller = new AbortController();
        let request = ApiClient.get<T[]>(this.endpoint, {
			signal: controller.signal,
		})
        return {request, cancel: ()=> controller.abort()}
    }
    post<T>(entity:T){
        return ApiClient.post(this.endpoint, entity);
    }
    patch<T extends Entity>(user: T){
        return ApiClient.patch(this.endpoint+"/" + user.id, user)
    }
    delete(id: number){
        return ApiClient.delete(this.endpoint+"/"+ id);
    }
}

const create = (endpoint: string) => {
    return new HttpService(endpoint);
}

export default create;