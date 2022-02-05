class Site {
    constructor() {
        this.boards = [];
    }

    addBoard(board) {
        const findBoard = this.boards.findIndex((i) => i.name === board.name);
        if (-1 === findBoard) {
            board.addedBoard = true;
            this.boards.push(board);
        } else {
            return error;
        }
    }

    findBoardByName(board) {
        const findBoard = this.boards.findIndex((i) => i.name === board);
        return this.boards[findBoard];
    }
}

class Board {
    constructor(board) {
        if (board === '' || board === null) {
            return error;
        }
        this.addedBoard = false;
        this.name = board;
        this.article = [];
    }

    publish(article) {
        if (!this.addedBoard) {
            return error;
        } else {
            article.id = `${this.name}-${Math.random()}`;
            article.createdDate = new Date().toISOString();
            article.comment = [];
            this.article.push(article);
        }
    }

    getAllArticles() {
        return this.article
    }
}

class Article {
    constructor(article) {
        const { subject, content, author } = article;
        if (subject === "" || subject === null) { return error };
        if (content === "" || content === null) { return error };
        if (author === "" || author === null) { return error };
        this.subject = subject;
        this.content = content;
        this.author = author;

    }

    reply(comment) {
        comment.createdDate = new Date().toISOString();
        this.comment.push(comment);

    }
    getAllComments(){
        return this.comment
    }
}

class Comment {
    constructor(comment) {
        const { content, author } = comment;
        if (content === "" || content === null) { return error };
        if (author === "" || author === null) { return error };
        this.content = content;
        this.author = author;
    };
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
