export interface IOnBoardingConfig {
  featureInformation: {
    title: string
    notesList: string[]
  }
}

export interface ICustomRegistrationQRCodeResponse {
  registrationLink: string,
  qrRegistrationLink: string
}
