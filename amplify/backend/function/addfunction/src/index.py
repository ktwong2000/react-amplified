import requests


def lambda_handler(event, context):
# Use AWS4Auth to sign a requests session
    session = requests.Session()

    # As found in AWS Appsync under Settings for your endpoint.
    APPSYNC_API_ENDPOINT_URL = 'https://o7gldedmp5bxteueg5emyjpeeu.appsync-api.ap-southeast-1.amazonaws.com/graphql'
         #                      '.appsync-api.ap-southeast-2.amazonaws.com/graphql'
    # Use JSON format string for the query. It does not need reformatting.
    query = """
        query foo {
            getMasterModel(
               ingredient: "E100"
            ){ 
               ingredient
    }}"""
    # Now we can simply post the request...
    response = session.request(
        url=APPSYNC_API_ENDPOINT_URL,
        method='POST',
        json={'query': query}
    )
    print(response.text)