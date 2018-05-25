visits = ()=>{
    return "select * from visits";
}
offers = ()=>{
    return "select * from offers"
}
offersave = (obj)=>{
    sql = "insert into offers ";
    sql+= "(kdoffer,offerdate,client_id,client_site_id,address,email,pic,phone,service,price,source,description,sale_id) ";
    sql+= "values ";
    sql+= "("+obj.kdoffer+","+obj.offerdate+","+obj.client_id+","+obj.client_site_id+","+obj.address+","+obj.email+","+obj.pic+","+obj.phone+","+obj.service+","+obj.price+","+obj.source+","+obj.description+","+obj.sale_id+")";
    return sql;
}
module.exports = {
    visits: visits,
    offers: offers,
    offersave: offersave
}