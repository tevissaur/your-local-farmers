import { gql } from '@apollo/client'

class StoreService {
    queryBuilder(specs) {
        const query = gql(specs)
        return query
    }
    mutationBuilder(specs) {
        const mutation = gql(specs)
        return mutation
    }
}


export default new StoreService()