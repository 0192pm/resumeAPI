import logging
import azure.functions as func

def main(req: func.HttpRequest, inputDocument: func.DocumentList, outputDocument: func.Out[func.DocumentList]) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')

    # Initialize values
    document_id = ''
    visitorCount = 0

    # Access properties of visitorCounter
    for document in inputDocument:
        document_id = document.get('id', 'id')
        visitorCount = int(document.get('count', 0))

    # Increment number of visitors by 1
    visitorCount += 1 

    # Store updated visitor count to cosmosDB
    output_document = func.Document.from_dict({
        "id": document_id,
        "count": visitorCount
    })

    outputDocument.set([output_document])

    return func.HttpResponse(f"{str(visitorCount)}", status_code=200)