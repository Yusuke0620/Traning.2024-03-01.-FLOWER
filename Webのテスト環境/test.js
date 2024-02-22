class Tweet {
    constructor(name, date, content) {
        this.name = name;
        this.date = date;
        this.content = content;
    }

    // メソッド
    display()  {
        console.log(`&{this.name} (${this.date}: ${this.content})`);
    }
}

// Aさんのインスタンスを作成
const tweetA = new Tweet('Aさん', '2024-02-20', '今日は良い天気ですね。');

// Bさんの投稿インスタンスを作成


tweetA.display();