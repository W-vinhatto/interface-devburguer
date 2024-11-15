const formatDate = (date) => {
    return new Date(date).toLocaleDateString('pt-Br', {
        hour: '2-digit',
        minute: '2-digit'
    })
}

export default formatDate