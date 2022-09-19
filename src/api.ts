import axios from "axios";

import { globalEndpoint } from "./constants";
import {
    ItchDownloadInfo,
    ItchGameInfo,
    ItchUploadInfo,
    ItchUploadsList,
} from "./types";

export class ItchApi {
    private apiKey: string;
    private endpoint: string;

    public constructor(apiKey: string) {
        this.apiKey = apiKey;

        this.endpoint = `${globalEndpoint}/${this.apiKey}`;
    }

    public async getGameInfo(gameUrl: string): Promise<ItchGameInfo>;
    public async getGameInfo(gameId: number): Promise<ItchGameInfo>;

    public async getGameInfo(game: unknown): Promise<ItchGameInfo> {
        if (typeof game === "number") {
            const url = `${this.endpoint}/game/${game}`;
            const request = await axios.get<ItchGameInfo>(url);

            return request.data;
        } else if (typeof game === "string") {
            const slash = game.endsWith("/") ? "" : "/";

            const url = `${game}${slash}data.json`;
            const request = await axios.get<ItchGameInfo>(url);

            return request.data;
        } else {
            throw new ReferenceError('Unknown parameter type: "game"');
        }
    }

    public async getUploads(gameId: number): Promise<ItchUploadsList> {
        const url = `${this.endpoint}/game/${gameId}/uploads`;
        const request = await axios.get<ItchUploadsList>(url);

        return request.data;
    }

    public async getUpload(uploadId: number): Promise<ItchUploadInfo> {
        const url = `${this.endpoint}/upload/${uploadId}`;
        const request = await axios.get<ItchUploadInfo>(url);

        return request.data;
    }

    public async getDownloadInfo(uploadId: number): Promise<ItchDownloadInfo> {
        const url = `${this.endpoint}/upload/${uploadId}/download`;
        const request = await axios.get<ItchDownloadInfo>(url);

        return request.data;
    }
}
