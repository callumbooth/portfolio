export interface BlogArticleFrontmatter {
    title: string;
    timeToRead: string;
    createdDate: Date;
    tags: string[];
}

export interface WorkArticleFrontmatter {
    company: string;
    title: string;
    tags: string[];
    imageUrl: string;
    highlightColor: string;
    blurb: string;
    createdDate: Date;
}
