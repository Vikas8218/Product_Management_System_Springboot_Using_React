package com.vikas.product_management_system.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vikas.product_management_system.model.Product;
import com.vikas.product_management_system.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService{
  
@Autowired
  private ProductRepository productRepo;
  @Override
  public String deleteProduct(Integer id) {
    Product product=productRepo.findById(id).get();
    if(product!=null)
    {
    productRepo.delete(product);
    return "product Delete Sucessfully";
    }
    return "Something wrong on Server";
    
  }
  

  @Override
  public Product editProduct(Product  p, Integer id) {
       
    Product oldproduct=productRepo.findById(id).get();
    oldproduct.setProductName(p.getProductName());
    oldproduct.setDescription(p.getDescription());
    oldproduct.setPrice(p.getPrice());
    oldproduct.setStatus(p.getStatus());
    return productRepo.save(oldproduct);
  }


  @Override
  public List<Product> getAllproduct() {
    return productRepo.findAll();
  }

  @Override
  public Product getProductById(Integer id) {
    
    return productRepo.findById(id).get();
  }

  @Override
  public Product saveProduct(Product product) {
       return productRepo.save(product);
     

  }
  

  
}
