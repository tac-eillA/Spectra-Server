import { IFormattedKillfeed, IFormattedRoster, IFormattedScoreboard } from "./eventData";
export declare class Player {
    private name;
    private tagline;
    private playerId;
    private searchName;
    private position;
    private locked;
    private agentInternal;
    private agentProper;
    private isAlive;
    private hasSpike;
    private isObserved;
    private kills;
    private deaths;
    private assists;
    private kdRatio;
    private killsThisRound;
    private currUltPoints;
    private maxUltPoints;
    private ultReady;
    private money;
    private moneySpent;
    private spentMoneyThisRound;
    private initialShield;
    private highestWeapon;
    private teamKills;
    private headshotKills;
    private headshotRatio;
    private killsByWeaponsAndAbilities;
    private killsOnEnemyPlayer;
    private killsOnTeammatePlayer;
    private assistsFromTeammate;
    private scoreboardAvailable;
    constructor(data: IFormattedRoster);
    onRosterUpdate(data: IFormattedRoster): void;
    updateFromScoreboard(data: IFormattedScoreboard): void;
    extractKillfeedInfo(data: IFormattedKillfeed): void;
    fallbackKillfeedExtraction(data: IFormattedKillfeed, victim?: boolean): void;
    processObservedEvent(observedName: string): void;
    resetRoundSpecificValues(isSideSwitch: boolean): void;
    getName(): string;
    getSearchName(): string;
    getPlayerId(): string;
    checkIsAlive(): boolean;
    getMoneySpent(): number;
    getKillsThisRound(): number;
    resetKillsThisRound(): void;
    resetMoneyThisRound(): void;
}
