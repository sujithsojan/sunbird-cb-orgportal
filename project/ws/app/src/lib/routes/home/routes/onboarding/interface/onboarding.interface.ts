export interface IOnBoardingConfig {
  featureInformation: {
    title: string
    notesList: string[],
    onBoardingVideo: string
  }
}

export interface ICustomRegistrationQRCodeResponse {
  registrationLink: string,
  qrRegistrationLink: string
}

export interface IRegisteredLinksList {
  orgId: string
  id: string
  status: string
  url: string
  startDate: string
  endDate: string
  createdBy: string
  createdDateTime: string
  numberOfUsersOnboarded: number
  qrCodeImagePath: string
}
