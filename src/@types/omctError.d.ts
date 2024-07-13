interface OmctErrorResponse extends Pick<ErrorResponse, 'message'> {
  code: import('@Constant/errorKeyValue').EOmctErrorNo;
}
