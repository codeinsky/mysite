export interface Vote{
    // {
    //     "id": 2,
    //     "liked": true,
    //     "unliked": false,
    //     "date": null,
    //     "ipVoted": "1.1.172.30.45",
    //     "cookieVoted": false
    // }

    id          :number;
    liked       :boolean;
    unlike      :boolean;
    date        :Date;
    ipVoted     :String;
    cookieVoted :boolean;


}