const projects = [
    {
        id: 'DEPT_IT',
        name: 'Information Technology',
        child: [
            { id: 'DB"', name: 'Database' },
            { id: 'MOB', name: 'Mobile Application' },
            {
                id: 'WEB',
                name: 'Web Application',
                child: [
                    { id: 'CMIS', name: 'CMIS' },
                    { id: 'EQMP', name: 'EQMP' }
                ]
            }
        ]
    },
    {
        id: 'DEPT_ENGINEERING',
        name: 'CEMS'
    }
]

function findPath(str, object, path = []) {
    for (const [key, value] of Object.entries(object)) {
        if (value === str) {
            return [...path, value.id ? value.id : null]
        }
        if (value instanceof Object || value instanceof Array) {
            const newPath = findPath(str, value, [...path, value.id ? value.id : null])
            if (newPath) {
                return newPath.filter((item) => item !== null)
            }
        }
    }
    return null
}

const path = findPath('EQMP', projects)
console.log(path) // ["DEPT_IT", "WEB", "EQMP"]
