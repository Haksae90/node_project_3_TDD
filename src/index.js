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
            throw new Error('There is already the same board name.');
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
            throw new Error('You must give board name');
        }
        this.addedBoard = false;
        this.name = board;
        this.article = [];
    }

    publish(article) {
        if (!this.addedBoard) {
            throw new Error('Please register the board on the site');
        } else {
            article.id = `${this.name}-${Math.random()}`;
            article.createdDate = new Date().toISOString();
            article.comment = [];
            this.article.push(article);
        }
    }

    getAllArticles() {
        return this.article;
    }
}

class Article {
    constructor(article) {
        const { subject, content, author } = article;
        if (subject === '' || subject === null) {
            throw new Error('Please write the subject');
        }
        if (content === '' || content === null) {
            throw new Error('Please write the content');
        }
        if (author === '' || author === null) {
            throw new Error('Please write the author');
        }
        this.subject = subject;
        this.content = content;
        this.author = author;
    }

    reply(comment) {
        comment.createdDate = new Date().toISOString();
        this.comment.push(comment);
    }
    getAllComments() {
        return this.comment;
    }
}

class Comment {
    constructor(comment) {
        const { content, author } = comment;
        if (content === '' || content === null) {
            throw new Error('Please write the content');
        }
        if (author === '' || author === null) {
            throw new Error('Please write the author');
        }
        this.content = content;
        this.author = author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
