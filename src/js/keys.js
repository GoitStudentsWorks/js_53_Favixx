export const keys = {
    KEYS: [
        {
            public:'c9193a7afd018df1ebb0b85c6cadc702',
            private:'b6937bfb420ece5e2f5c69671b91e96ac9158c8f'
        },
        {
            public:'0498998f2a8f5ed7c036ed9f1738767d',
            private:'4fca95a0c70d4f7428c5513f5c2fe09a131468c3'
        },
        {
            public:'e8d87ed088b5013742a2a9466816b30e',
            private:'dbde977f898ea7131460b979ad9d4adf2e774ce4'
        },

    ],
    keyID: 0,
    getNextKey(){
        if(this.keyID === this.KEYS.length) {
            this.keyID = 0;
            return null;
        }
        this.keyID += 1;
        return this.KEYS[this.keyID-1]
    }
}