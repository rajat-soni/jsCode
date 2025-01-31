//For WM America CIO CMO
function call_data_curl_api(camp_id="",mappedData=[],endUrl="",ip="",onComplete=null){
			//Call API
			const postData={
			"camp_id":camp_id,
			"tempdata" : JSON.stringify(mappedData),
			"ip_address" : ip,
			//Object check used to add EDM_DETAILS section on 16-08-2024
			"URL" : (typeof endUrl === "object")? endUrl : {"URL" : window.location.href, "END_URL" : endUrl}
			}
			
			
			fetch('https://app-lp.techglobaledgeinfo.in:4007/data/w8_formdata', {
			  method: 'POST',
			  headers: { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json'  },
			  body: JSON.stringify(postData)
			})
			.then(res => res.json())
			.then(res => {
				console.log("SERVER API SAYS:",res)
				if(onComplete){
					onComplete(res,null);
				}
			}).catch( (error) => { 
				if(onComplete){
					onComplete(false,error);
				}
			} );
			//Call api END
			
}



//Main Function
function post_form_data(camp_id="",mappedData=[],endUrl="",onComplete=null){

			fetch('https://b2b-insight.biz-tech-insights.com/DataCurlNodeApi/get-ip.php', {
			  method: 'GET',
			  headers: { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json'  }
			})
			.then(res => res.json())
			.then(res => {
				console.log("IP fetched")
				const ip=res.ip
				call_data_curl_api(camp_id,mappedData,endUrl,ip,onComplete)
			}).catch( (error) => { 
				console.log("Form data post getIP error,sending null ip",error)
				const ip=""
				call_data_curl_api(camp_id,mappedData,endUrl,ip,onComplete);
			} );

}


