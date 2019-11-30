export const deletePost = (id) => {
    console.log('this is the :',id)
    return {
        type: "DELETE_POST",
        id
    }
}