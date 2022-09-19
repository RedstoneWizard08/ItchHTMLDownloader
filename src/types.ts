export interface ItchEmbedInfo {
    width: number;
    height: number;
    fullscreen: boolean;
}

export interface ItchUserInfo {
    url: string;
    id: number;
    username: string;
    display_name: string;
    cover_url: string;
}

export interface ItchGameInfo {
    game: {
        id: number;
        url: string;
        type: string;
        title: string;
        cover_url: string;
        short_text: string;
        classification: string;
        created_at: Date | string;
        published_at: Date | string;

        user: ItchUserInfo;
        embed: ItchEmbedInfo;

        has_demo: boolean;
        min_price: number;
        can_be_bought: boolean;
        in_press_system: boolean;

        p_android: boolean;
        p_windows: boolean;
        p_osx: boolean;
        p_linux: false;
    };
}

export interface ItchUploadInfo {
    id: number;
    size: number;
    type: string;
    game_id: number;
    storage: string;
    md5_hash: string;
    filename: string;
    position: number;
    preorder: boolean;
    created_at: Date | string;
    updated_at: Date | string;

    p_android: boolean;
    p_windows: boolean;
    p_osx: boolean;
    p_linux: boolean;

    demo: boolean;
}

export interface ItchUploadsList {
    uploads: ItchUploadInfo[];
}

export interface ItchDownloadInfo {
    url: string;
}
