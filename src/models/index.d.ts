import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type LeagueMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SportsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class League {
  readonly id: string;
  readonly title?: string;
  readonly description?: string;
  readonly sportsID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<League, LeagueMetaData>);
  static copyOf(source: League, mutator: (draft: MutableModel<League, LeagueMetaData>) => MutableModel<League, LeagueMetaData> | void): League;
}

export declare class Sports {
  readonly id: string;
  readonly title?: string;
  readonly description?: string;
  readonly Leagues?: (League | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Sports, SportsMetaData>);
  static copyOf(source: Sports, mutator: (draft: MutableModel<Sports, SportsMetaData>) => MutableModel<Sports, SportsMetaData> | void): Sports;
}