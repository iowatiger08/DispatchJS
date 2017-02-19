export const environment = {
    production: false,

    region: 'us-west-2',
    /*cognito*/
    /*identityPoolId: 'us-east-1:fbe0340f-9ffc-4449-a935-bb6a6661fd53',
    userPoolId: 'us-east-1_PGSbCVZ7S',
    clientId: 'hh5ibv67so0qukt55c5ulaltk',*/
	accessKeyId : 'AKIAJ6XPBOZGI3YTH5RA',
	secretAccessKey:'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',
    /*s3*/
    dispatchBucket: 'loaddispatch',
    bucketRegion: 'us-west-2',

    /*dynamodb*/
    loadDdbTableName: 'LOAD',
    driversDdbTableName: 'DRIVER',
    carriersDdbTableName: 'CARRIER'
};