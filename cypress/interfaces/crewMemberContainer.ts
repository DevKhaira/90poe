export interface ICrewMemberContainer {
    visit(): ICrewMemberContainer;
    moveOnePosition(direction: string, position:string): ICrewMemberContainer;
    checkCrewmemberContainerAssets(): ICrewMemberContainer;
    assertAssetOn(position: string, direction:string): ICrewMemberContainer;
    assetInColumn(asset: string): ICrewMemberContainer;
  }