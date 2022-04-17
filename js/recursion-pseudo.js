let arr = ['vova', 'Alex', 'Ihor', 'Marat', 'Marat', 'vova', 'Alex', 'Ihor', 'Marat', 'Marat','vova', 'Alex', 'Ihor', 'Marat', 'Marat']

let obj = {
    name: 'vova',
    next: {
        name: 'Alex',
        next: {
            name: 'Ihor',
            next: {
                name: 'Marat',
                next: {
                    name: 'Marat',
                    next: {

                    }
                }
            }
        }
    }
}


// obj.next.next.name
function iterLinkedList(arg) {
    if(arg.name === 'Ihor') {
        return arg
    }

    iterLinkedList(arg.next)
}

iterLinkedList(obj)