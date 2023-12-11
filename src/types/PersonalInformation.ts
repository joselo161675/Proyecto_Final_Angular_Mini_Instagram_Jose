type InformationAccount = {
    publicaciones: number,
    seguidores: number,
    seguidos: number,
    descripcion: string,
    imageProfile: string
}

type Threads = {
    username: string,
    privado:  boolean
}

type Highlights = {
    image: string,
    name: string
}

type Post = {
id: any
    multiple: boolean,
    isVideo: boolean,
    creation: string,
    isEdited: boolean,
    lastModification: string,
    persons: Array<any>,
    description: string,
    isPrivate: boolean
}

export type PersonalInformationType = {
    username: string,
    infoaccount: InformationAccount,
    highlights: Array<Highlights>,
    posts: Array<Post>,
    threads: Threads
}