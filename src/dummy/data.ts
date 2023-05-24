import { Seniority } from "../types/Types";

export const data: Seniority[] =  [
    {
        "name": "Líder Técnico",
        "description": "Líder Técnico",
        "priorTo": [
            "expert"
        ],
        "requirements": [
            {
                "id": "python_expert",
                "name": "Python Avanzado",
                "description": "Python Avanzado",
                "status": "lock"
            },
            {
                "id": "java_expert",
                "name": "Java Avanzado",
                "description": "Java Avanzado",
                "status": "lock"
            },
            {
                "id": "git_expert",
                "name": "Git Avanzado",
                "description": "Git Avanzado",
                "status": "lock"
            },
            {
                "id": "docker_expert",
                "name": "Docker Avanzado",
                "description": "Docker Avanzado",
                "status": "lock"
            }
        ],
        "style": {
            "classes": [
                "seniority-simple state-null"
            ],
            "icon": "icon-null"
        },
        "type": "simple"
    },
    {
        "name": "Líder de Proyecto",
        "description": "Líder de Proyecto",
        "priorTo": [
            "project manager"
        ],
        "requirements": [
            {
                "id": "leader_culture",
                "name": "Cultura de Liderazgo",
                "description": "Cultura de Liderazgo",
                "status": "lock"
            },
            {
                "id": "project_management",
                "name": "Gestión de Proyectos",
                "description": "Gestión de Proyectos",
                "status": "lock"
            },
            {
                "id": "team_management",
                "name": "Gestión de Equipos",
                "description": "Gestión de Equipos",
                "status": "lock"
            },
            {
                "id": "scrum",
                "name": "Scrum",
                "description": "Scrum",
                "status": "lock"
            }
        ],
        "style": {
            "classes": [
                "seniority-simple state-null"
            ],
            "icon": "icon-null"
        },
        "type": "simple"
    },
    {
        "name": "Experto",
        "description": "Experto",
        "priorTo": [
            "mid expert"
        ],
        "style": {
            "classes": [
                "seniority-simple state-null"
            ],
            "icon": "icon-null"
        },
        "type": "simple"
    },
    {
        "name": "Experto Senior",
        "description": "Experto Senior",
        "style": {
            "classes": [
                "seniority-simple state-null"
            ],
            "icon": "icon-null"
        },
        "type": "simple"
    },
    {
        "name": "Gerente de Proyecto",
        "description": "Gerente de Proyecto",
        "priorTo": [
            "project director"
        ],
        "style": {
            "classes": [
                "seniority-simple state-null"
            ],
            "icon": "icon-null"
        },
        "type": "simple"
    },
    {
        "name": "Desarrollador Senior",
        "description": "Desarrollador Senior",
        "priorTo": [
            "technical leader",
            "project leader"
        ],
        "requirements": [
            {
                "id": "python_begginer",
                "name": "Python Básico",
                "description": "Python Básico",
                "status": "completed"
            },
            {
                "id": "java_begginer",
                "name": "Java Básico",
                "description": "Java Básico",
                "status": "pending"
            },
            {
                "id": "git_begginer",
                "name": "Git Básico",
                "description": "Git Básico",
                "status": "pending"
            },
            {
                "id": "docker_begginer",
                "name": "Docker Básico",
                "description": "Docker Básico",
                "status": "unlock"
            }
        ],
        "style": {
            "classes": [
                "seniority-complex state-null"
            ],
            "icon": "icon-null"
        },
        "type": "complex"
    },
    {
        "name": "Desarrollador Junior",
        "description": "Desarrollador Junior",
        "priorTo": [
            "mid developer"
        ],
        "style": {
            "classes": [
                "seniority-simple state-null"
            ],
            "icon": "icon-null"
        },
        "type": "simple"
    },
    {
        "name": "Desarrollador Medio",
        "description": "Desarrollador Medio",
        "priorTo": [
            "senior developer"
        ],
        "style": {
            "classes": [
                "seniority-simple state-null"
            ],
            "icon": "icon-null"
        },
        "type": "simple"
    },
    {
        "name": "Director de Proyecto",
        "description": "Director de Proyecto",
        "style": {
            "classes": [
                "seniority-simple state-null"
            ],
            "icon": "icon-null"
        },
        "type": "simple"
    },
    {
        "name": "Experto Medio",
        "description": "Experto Medio",
        "priorTo": [
            "senior expert"
        ],
        "style": {
            "classes": [
                "seniority-simple state-null"
            ],
            "icon": "icon-null"
        },
        "type": "simple"
    }
]