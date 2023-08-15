class ApiChannelsDataModel {
  final List<ApiChannelsDataModelChannels>? channels;
  final String? largeBankCardAmount;
  final String? largeBankCardCustomerServiceUrl;
  final String? minDepositAmount;

  ApiChannelsDataModel({
    this.channels,
    this.largeBankCardAmount,
    this.largeBankCardCustomerServiceUrl,
    this.minDepositAmount,
  });

  factory ApiChannelsDataModel.fromJson(Map<String, dynamic> json) {
    return ApiChannelsDataModel(
      channels: (json['channels'] as List<dynamic>?)
          ?.map((e) =>
              ApiChannelsDataModelChannels.fromJson(e as Map<String, dynamic>))
          .toList(),
      largeBankCardAmount: json['largeBankCardAmount'] as String?,
      largeBankCardCustomerServiceUrl:
          json['largeBankCardCustomerServiceUrl'] as String?,
      minDepositAmount: json['minDepositAmount'] as String?,
    );
  }
}

class ApiChannelsDataModelChannels {
  final int? accountId;
  final String? companyCode;
  final String? fee;
  final List? fixedAmounts;
  final List? customizeAmounts;
  final String? maxDepositAmount;
  final String? minDepositAmount;
  final int? methodId;
  final String? name;
  final String? phoneNumber;
  final String? qrImagePath;
  final int? transferType;
  final int? type;
  final String? vipRoomAccountNo;
  final String? vipRoomAccountName;
  final String? vipRoomIcon;
  final List<ApiChannelsDataModelDepositAmountRanges>? depositAmountRanges;

  ApiChannelsDataModelChannels({
    this.accountId,
    this.companyCode,
    this.fee,
    this.fixedAmounts,
    this.customizeAmounts,
    this.maxDepositAmount,
    this.minDepositAmount,
    this.methodId,
    this.name,
    this.phoneNumber,
    this.qrImagePath,
    this.transferType,
    this.type,
    this.vipRoomAccountNo,
    this.vipRoomAccountName,
    this.vipRoomIcon,
    this.depositAmountRanges,
  });

  factory ApiChannelsDataModelChannels.fromJson(Map<String, dynamic> json) {
    return ApiChannelsDataModelChannels(
      accountId: json['accountId'] as int?,
      companyCode: json['companyCode'] as String?,
      fee: json['fee'] as String?,
      fixedAmounts: json['fixedAmounts'] as List<dynamic>?,
      customizeAmounts: json['customizeAmounts'] as List<dynamic>?,
      maxDepositAmount: json['maxDepostiAmount'] as String?,
      minDepositAmount: json['minDepositAmount'] as String?,
      methodId: json['methodId'] as int?,
      name: json['name'] as String?,
      phoneNumber: json['phoneNumber'] as String?,
      qrImagePath: json['qrImagePath'] as String?,
      transferType: json['transferType'] as int?,
      type: json['type'] as int?,
      vipRoomAccountNo: json['vipRoomAccountNo'] as String?,
      vipRoomAccountName: json['vipRoomAccountName'] as String?,
      vipRoomIcon: json['vipRoomIcon'] as String?,
      depositAmountRanges: (json['depositAmountRanges'] as List<dynamic>?)
          ?.map((e) => ApiChannelsDataModelDepositAmountRanges.fromJson(
              e as Map<String, dynamic>))
          .toList(),
    );
  }
}

class ApiChannelsDataModelDepositAmountRanges {
  final String? minAmount;
  final String? maxAmount;

  ApiChannelsDataModelDepositAmountRanges({
    this.minAmount,
    this.maxAmount,
  });

  factory ApiChannelsDataModelDepositAmountRanges.fromJson(
      Map<String, dynamic> json) {
    return ApiChannelsDataModelDepositAmountRanges(
      minAmount: json['minAmount'] as String?,
      maxAmount: json['maxAmount'] as String?,
    );
  }
}
