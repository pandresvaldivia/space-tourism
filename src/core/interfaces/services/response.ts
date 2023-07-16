export interface GraphqlGenericResponse<T> {
	data?: T;
	errors?: GraphqlGenericError[];
}

type GraphqlGenericError = {
	message: string;
};
